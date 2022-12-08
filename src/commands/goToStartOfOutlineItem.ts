import * as vscode from 'vscode'
import { findCurrentEditorOutlineItem } from '@zardoy/vscode-utils/build/outline'
import { registerExtensionCommand } from 'vscode-framework'

export default () => {
    registerExtensionCommand('goToStartOfOutlineItem', async () => {
        const { activeTextEditor } = vscode.window
        if (!activeTextEditor) return
        const outline = await findCurrentEditorOutlineItem()
        if (!outline) return
        const pos = outline.selectionRange.start
        activeTextEditor.selection = new vscode.Selection(pos, pos)
    })
}
