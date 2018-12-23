import React from 'react'

export const GithubIcon = React.memo(({ size = 20 }: { size?: number }) => {
  return (
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <path
        d="M512 12.636c-282.747 0-512 229.212-512 512 0 226.222 146.698 418.14 350.126 485.827 25.58 4.73 35-11.1 35-24.638 0-12.206-.47-52.551-.696-95.314-142.438 30.966-172.503-60.416-172.503-60.416-23.286-59.166-56.852-74.915-56.852-74.915-46.45-31.785 3.502-31.13 3.502-31.13 51.404 3.604 78.479 52.756 78.479 52.756 45.67 78.275 119.767 55.645 149.012 42.558 4.588-33.096 17.859-55.685 32.502-68.465-113.725-12.943-233.267-56.852-233.267-253.03 0-55.89 20.009-101.581 52.757-137.421-5.325-12.902-22.856-64.963 4.956-135.496 0 0 43.008-13.742 140.84 52.49 40.838-11.345 84.644-17.039 128.164-17.244 43.5.205 87.327 5.878 128.246 17.245 97.73-66.253 140.657-52.49 140.657-52.49 27.873 70.532 10.342 122.593 5.038 135.495 32.83 35.86 52.695 81.53 52.695 137.42 0 196.65-119.788 239.944-233.8 252.622 18.37 15.892 34.734 47.042 34.734 94.802 0 68.505-.594 123.637-.594 140.513 0 13.619 9.216 29.593 35.165 24.576C877.486 942.612 1024 750.756 1024 524.616c0-282.788-229.233-512-512-512z"
        data-spm-anchor-id="a313x.7781069.0.i0"
        className="selected"
        fill="#2c2c2c"
      />
    </svg>
  )
})

export const FileIcon = React.memo(({ size = 16 }: { size?: number }) => {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size}>
      <title>file</title>
      <path
        fill="#dcdbdd"
        d="M19.28,4H7.93A1.91,1.91,0,0,0,6,6V26a1.91,1.91,0,0,0,1.93,2h16A2,2,0,0,0,26,26V10ZM24,26H8V6H18v6h6Z"
      />
    </svg>
  )
})

export const DeleteIcon = React.memo(({ size = 20 }: { size?: number }) => (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    data-spm-anchor-id="a313x.7781069.0.i0"
    width={size}
    height={size}
  >
    <path
      d="M512.175 775.053c12.687 0 22.984-10.296 22.984-22.982V430.315c0-12.686-10.297-22.983-22.982-22.983s-22.984 10.297-22.984 22.983V752.07c0 12.687 10.297 22.983 22.982 22.983z"
      data-spm-anchor-id="a313x.7781069.0.i3"
      className="selected"
      fill="#d81e06"
    />
    <path
      d="M650.071 775.053c12.686 0 22.983-10.296 22.983-22.982V430.315c0-12.686-10.297-22.983-22.983-22.983s-22.982 10.297-22.982 22.983V752.07c0 12.687 10.295 22.983 22.982 22.983z"
      data-spm-anchor-id="a313x.7781069.0.i4"
      className="selected"
      fill="#d81e06"
    />
    <path
      d="M374.28 775.053c12.687 0 22.983-10.296 22.983-22.982V430.315c0-12.686-10.296-22.983-22.982-22.983s-22.983 10.297-22.983 22.983V752.07c0 12.687 10.296 22.983 22.983 22.983z"
      data-spm-anchor-id="a313x.7781069.0.i2"
      className="selected"
      fill="#d81e06"
    />
    <path
      d="M833.93 154.525H696.037V108.56c0-25.372-20.591-45.964-45.965-45.964h-275.79c-25.373 0-45.966 20.547-45.966 45.964v45.965H190.42c-25.372 0-45.964 20.592-45.964 45.965v45.965c0 25.373 20.592 45.965 45.964 45.965v574.564c0 50.746 41.14 91.929 91.931 91.929l459.65.002c50.747 0 91.93-41.14 91.93-91.931V292.42c25.373 0 45.967-20.546 45.967-45.965V200.49c-.002-25.373-20.595-45.965-45.967-45.965zm-459.65-25.029c0-12.686 10.297-22.982 22.983-22.982H627.09c12.687 0 22.982 10.296 22.982 22.982v22.983h-275.79v-22.983zm413.687 737.488c0 25.373-20.593 45.964-45.966 45.964H282.35c-25.374 0-45.966-20.591-45.966-45.964V292.42h551.583v574.564zm22.981-620.529H213.403c-12.686 0-22.983-10.296-22.983-22.981 0-12.686 10.297-22.983 22.983-22.983h597.546c12.686 0 22.983 10.297 22.983 22.983-.001 12.685-10.297 22.981-22.984 22.981z"
      data-spm-anchor-id="a313x.7781069.0.i1"
      fill="#d81e06"
    />
  </svg>
))

export const EditIcon = React.memo(({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 1024 1024" width={size} height={size}>
    <path
      d="M631.5 215.8L213.9 633.4c-12.1 12.1-12.1 31.8 0 44l131.9 131.9c12.1 12.1 31.8 12.1 44 0l417.6-417.6c12.1-12.1 12.1-31.8 0-44L675.5 215.8c-12.2-12.1-31.8-12.1-44 0zm153.9-109.9l131.9 131.9c12.1 12.1 12.1 31.8 0 44l-44 44c-12.1 12.1-31.8 12.1-44 0l-131.8-132c-12.1-12.1-12.1-31.8 0-44l44-44c12-12 31.7-12 43.9.1zM194.6 688.1L335 828.6c8.1 8.1 4.9 22-6 25.7L116.9 926c-12.2 4.1-23.8-7.5-19.7-19.7l71.7-212.1c3.6-11 17.5-14.2 25.7-6.1z"
      fill="#1296db"
    />
  </svg>
))

export const LogoutIcon = React.memo(
  ({ size = 20, color = 'red' }: { size?: number; color?: string }) => (
    <svg className="icon" viewBox="0 0 1024 1024" width={size} height={size}>
      <path
        d="M768 106v78c97.2 76 160 194.8 160 328 0 229.6-186.4 416-416 416S96 741.6 96 512c0-133.2 62.8-251.6 160-328v-78C121.6 190.8 32 341.2 32 512c0 265.2 214.8 480 480 480s480-214.8 480-480c0-170.8-89.6-321.2-224-406z"
        fill={color}
      />
      <path
        d="M512 32c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32s32-14.4 32-32V64c0-17.6-14.4-32-32-32z"
        fill={color}
      />
    </svg>
  ),
)