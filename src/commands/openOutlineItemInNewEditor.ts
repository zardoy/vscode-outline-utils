import * as vscode from 'vscode'
import { findCurrentEditorOutlineItem } from '@zardoy/vscode-utils/build/outline'
import { registerExtensionCommand } from 'vscode-framework'
import stringDedent from 'string-dedent'

export default () => {
    registerExtensionCommand('openOutlineItemInNewEditor', async _ => {
        const { activeTextEditor } = vscode.window
        if (!activeTextEditor) return
        const { document } = activeTextEditor
        const outline = await findCurrentEditorOutlineItem()
        if (!outline) return
        const { range } = outline
        let text = document.getText(range)
        if (!range.isSingleLine) {
            text = text
                .split('\n')
                .map((line, i) => {
                    if (i !== 0) return line
                    // pros: better result on well-formatted code
                    // cons: worse result on not well-formatted code
                    return ' '.repeat(range.start.character) + line
                })
                .join('\n')
            try {
                text = stringDedent(`\n${text}\n`)
            } catch {}
        }

        await vscode.window.showTextDocument(
            await vscode.workspace.openTextDocument({
                content: text,
                language: document.languageId,
            }),
            {},
        )
    })
}
