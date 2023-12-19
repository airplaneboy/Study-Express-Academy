import { ToolMenuProps } from 'sanity';
import { fetchAll } from './actions';
// import {Button, Flex} from '@sanity/ui'

export default function CustomToolMenu(props: ToolMenuProps) {
  const { activeToolName, context, tools } = props;

  const isSidebar = context == 'sidebar';

  return (
    <div className={isSidebar ? 'flex-col gap-2 justify-between' : 'flex gap-2 justify-between'}>
      <>{props.renderDefault(props)}</>
      <button
        className={`${
          isSidebar && 'mt-1 w-full'
        } hover:bg-blue-800 hover:text-white px-4 py-2 border border-blue-500 rounded`}
        onClick={fetchAll}>
        Refresh Dependents
      </button>
    </div>
  );
}
