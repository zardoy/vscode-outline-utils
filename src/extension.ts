import copyCurrentOutlinePath from './commands/copyCurrentOutlinePath'
import copyOutlineItemName from './commands/copyOutlineItemName'
import goToStartOfOutlineItem from './commands/goToStartOfOutlineItem'
import openOutlineItemInNewEditor from './commands/openOutlineItemInNewEditor'
import selectOutlineItem from './commands/selectOutlineItem'
import toggleOutlineItemComment from './commands/toggleOutlineItemComment'

export const activate = () => {
    copyOutlineItemName()
    selectOutlineItem()
    copyCurrentOutlinePath()
    openOutlineItemInNewEditor()
    goToStartOfOutlineItem()
    toggleOutlineItemComment()
}
