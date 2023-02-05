/*
 * SPDX-FileCopyrightText: 2022 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import type { ContentFormatter } from '../../../change-content-context/change-content-context'
import { wrapSelection } from '../formatters/wrap-selection'
import { ToolbarButton } from '../toolbar-button'
import React, { useCallback } from 'react'
import { TypeItalic as IconTypeItalic } from 'react-bootstrap-icons'

/**
 * Renders a button to make the selection in the {@link Editor editor} italic.
 */
export const ItalicButton: React.FC = () => {
  const formatter: ContentFormatter = useCallback(({ currentSelection }) => {
    return wrapSelection(currentSelection, '*', '*')
  }, [])
  return <ToolbarButton i18nKey={'italic'} icon={IconTypeItalic} formatter={formatter}></ToolbarButton>
}
