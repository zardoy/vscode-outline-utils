import * as vscode from 'vscode'
import { rangeToSelection } from '@zardoy/vscode-utils'
import { findCurrentEditorOutlineItem } from '@zardoy/vscode-utils/build/outline'
import { registerExtensionCommand } from 'vscode-framework'

export default () => {
    registerExtensionCommand('toggleOutlineItemComment', async (_, { block, command }: { block?; command? } = {}) => {
        const { activeTextEditor: editor } = vscode.window
        if (!editor) return
        const outline = await findCurrentEditorOutlineItem()
        if (!outline) return
        const oldSelections = editor.selections
        editor.selection = rangeToSelection(outline.range)
        await vscode.commands.executeCommand(command ?? (block ? 'editor.action.blockComment' : 'editor.action.commentLine'))
        editor.selections = oldSelections
    })
}
