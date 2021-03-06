import { List } from 'immutable'
import { PageRecord, Project, ProjectRecord, UserInfo } from '../types'

export class FetchError extends Error {
  readonly status: number

  constructor(readonly response: Response) {
    super()
    this.status = response.status
  }
}

export async function savePage(page: PageRecord) {
  const { _id: pageId, html, selector } = page
  const response = await fetch('/api/update-page', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ pageId, html, selector }),
  })
  if (!response.ok) {
    throw new Error(`${response.status} ${await response.text()}`)
  }
}

export async function getProject(username: string, projectName: string) {
  const response = await fetch(`/api/project/${username}/${projectName}`)
  if (!response.ok) {
    throw new Error(`${response.status} ${await response.text()}`)
  }
  const json = await response.json()

  const project = new ProjectRecord(json.project)
  const pages = List(json.pages).map((p: any) => new PageRecord(p))

  return { project, pages }
}

export async function addPage(projectId: string, name: string) {
  const response = await fetch('/api/add-page', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ projectId, name: name, description: '' }),
  })
  if (response.ok) {
    const json = await response.json()
    return new PageRecord(json)
  } else {
    throw new Error(`${response.status} ${await response.text()}`)
  }
}

export async function deletePage(pageId: string) {
  const response = await fetch('/api/delete-page', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ pageId }),
  })
  if (!response.ok) {
    throw new Error(`${response.status} ${await response.text()}`)
  }
}

export async function logout() {
  const response = await fetch('/api/logout', { method: 'POST' })
  if (response.ok) {
    return true
  } else {
    throw new Error(`${response.status} ${await response.text()}`)
  }
}

interface GetMyInfoResponse {
  username: string
  userId: number
  isAdmin: boolean
}
export async function getMyInfo(): Promise<GetMyInfoResponse> {
  const response = await fetch('/api/my-info')
  if (response.ok) {
    return await response.json()
  } else {
    throw new Error(`${response.status} ${await response.text()}`)
  }
}

// 获取用户的详细信息与用户工程列表
export async function getUserInfo(username: string) {
  const [res1, res2] = await Promise.all([
    fetch(`/api/user-info/${username}`),
    fetch(`/api/user-info/${username}/projects`),
  ])
  if (!res1.ok) {
    throw new FetchError(res1)
  }
  if (!res2.ok) {
    throw new FetchError(res2)
  }
  const userInfo: UserInfo = await res1.json()
  const projectList: Project[] = await res2.json()
  return { userInfo, projectList }
}

export async function addProject(name: string, description: string): Promise<Project> {
  const response = await fetch('/api/add-project', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ name, description }),
  })
  if (response.ok) {
    return response.json()
  } else {
    throw new Error(`${response.status} ${await response.text()}`)
  }
}

export async function updateProjectMeta(projectId: string, name: string, description: string) {
  const response = await fetch('/api/update-project-meta', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ projectId, name, description }),
  })
  if (response.ok) {
    return true
  } else {
    throw new Error(`${response.status} ${await response.text()}`)
  }
}

export async function deleteProject(projectId: string) {
  const response = await fetch('/api/delete-project', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ projectId }),
  })
  if (response.ok) {
    return true
  } else {
    throw new Error(`${response.status} ${await response.text()}`)
  }
}

export async function updatePageMeta(pageId: string, name: string) {
  const response = await fetch('/api/update-page-meta', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ pageId, name }),
  })
  if (response.ok) {
    return true
  } else {
    throw new Error(`${response.status} ${await response.text()}`)
  }
}

export interface CreateProjectData {
  name: string
  description: string
  pages: Array<{
    name: string
    html: string
    selector: string
  }>
}
export async function createProject(
  data: CreateProjectData,
): Promise<{ username: string; projectName: string }> {
  const response = await fetch('/api/create-project', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (response.ok) {
    return response.json()
  } else {
    throw new FetchError(response)
  }
}

type CreateProjectByZipResponse = { project: Project; warnings: string[] }
export async function createProjectByZip(zipFile: File): Promise<CreateProjectByZipResponse> {
  const formData = new FormData()
  formData.append('zipFile', zipFile)
  const response = await fetch('/api/create-project-by-zip', {
    method: 'POST',
    body: formData,
  })
  if (response.ok) {
    return response.json()
  } else {
    throw new FetchError(response)
  }
}

export async function getRecommendedProjects(): Promise<Project[]> {
  const response = await fetch('/api/recommended-projects')
  if (response.ok) {
    return response.json()
  } else {
    throw new FetchError(response)
  }
}

export async function setRecommendedProjects(
  recs: Array<{ username: string; projectName: string }>,
) {
  const response = await fetch('/api/admin/set-recommended-projects', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(recs),
  })
  if (response.ok) {
    return true
  } else {
    throw new FetchError(response)
  }
}
