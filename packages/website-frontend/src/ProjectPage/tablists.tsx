import classNames from 'classnames'
import { Map } from 'immutable'
import React from 'react'
import { FileIcon } from '../icons'
import { CloseIcon, FileTypeHtmlIcon, FileTypeJsonIcon, FileTypeTSIcon } from './icons'
import { HtmlRecord, HtmlTabRecord, SelectorRecord, SelectorTabRecord } from './interfaces'
import './tablists.styl'

export interface HtmlTablistProps {
  tabs: Map<number, HtmlTabRecord>
  activeHtmlId: number
  htmls: Map<number, HtmlRecord>
  onOpen(htmlId: number): void
  onClose(htmlId: number): void
}

// TODO HtmlTablist 和 selectorTabList 代码重复

export function HtmlTablist({ tabs, activeHtmlId, htmls, onOpen, onClose }: HtmlTablistProps) {
  function onMouseDown(e: React.MouseEvent<HTMLDivElement>, htmlId: number) {
    // TODO 下面这个行为有点问题
    // 阻止浏览器的默认行为，包括
    // * 鼠标左键会改变焦点元素
    // * 鼠标中键会触发滚轮
    e.preventDefault()

    if (e.button === 0) {
      // 鼠标左键
      onOpen(htmlId)
    } else if (e.button === 1) {
      // 鼠标中键
      onClose(htmlId)
    }
  }

  return (
    <div className="tablist">
      {tabs
        .sortBy(tab => tab.placeOrder)
        .map(tab => (
          <div
            key={tab.htmlId}
            className={classNames('tab', { active: tab.htmlId === activeHtmlId })}
            draggable
            onMouseDown={e => onMouseDown(e, tab.htmlId)}
          >
            <FileTypeHtmlIcon />
            <span className="tabname">{htmls.get(tab.htmlId).name}</span>
            <CloseIcon
              dirty={tab.isDirty()}
              onClick={e => {
                e.stopPropagation()
                onClose(tab.htmlId)
              }}
            />
          </div>
        ))
        .valueSeq()}
    </div>
  )
}

export const OutputTablist = React.memo(() => (
  <div className="tablist">
    <div className="tab active">
      <FileTypeJsonIcon />
      <span className="tabname">output</span>
      <span style={{ width: 16 }} />
    </div>
    <div className="tab">
      <FileTypeTSIcon />
      <span className="tabname">typings(wip)</span>
      <span style={{ width: 16 }} />
    </div>
  </div>
))

export interface SelectTabListProps {
  tabs: Map<number, SelectorTabRecord>
  activeSelectorId: number
  selectors: Map<number, SelectorRecord>
  onOpen(selectorId: number): void
  onClose(selectorId: number): void
}

export function SelectorTabList({
  tabs,
  activeSelectorId,
  onOpen,
  onClose,
  selectors,
}: SelectTabListProps) {
  function onMouseDown(e: React.MouseEvent<HTMLDivElement>, selectorId: number) {
    // 阻止浏览器的默认行为，包括
    // * 鼠标左键会改变焦点元素
    // * 鼠标中键会触发滚轮
    e.preventDefault()

    if (e.button === 0) {
      // 鼠标左键
      onOpen(selectorId)
    } else if (e.button === 1) {
      // 鼠标中键
      onClose(selectorId)
    }
  }

  return (
    <div className="tablist">
      {tabs
        .sortBy(tab => tab.placeOrder)
        .map(tab => (
          <div
            key={tab.selectorId}
            className={classNames('tab', { active: tab.selectorId === activeSelectorId })}
            draggable
            onMouseDown={e => onMouseDown(e, tab.selectorId)}
          >
            <FileIcon />
            <span className="tabname">{selectors.get(tab.selectorId).name}</span>
            <CloseIcon
              dirty={tab.isDirty()}
              onClick={e => {
                e.stopPropagation()
                onClose(tab.selectorId)
              }}
            />
          </div>
        ))
        .valueSeq()}
    </div>
  )
}