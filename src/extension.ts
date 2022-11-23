import copyCurrentOutlinePath from './commands/copyCurrentOutlinePath'
import copyOutlineItemName from './commands/copyOutlineItemName'
import openOutlineItemInNewEditor from './commands/openOutlineItemInNewEditor'
import selectOutlineItem from './commands/selectOutlineItem'

export const activate = () => {
    copyOutlineItemName()
    selectOutlineItem()
    copyCurrentOutlinePath()
    openOutlineItemInNewEditor()
}
