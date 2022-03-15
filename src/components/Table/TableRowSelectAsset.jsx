import './TableRowSelectAsset.css';
import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { Text } from '..';

const TableRowSelectAsset = ({
  helperText,
  assetName,
  assetIcon,
  selectAssetType,
}) => {
  const { handleSelectAssetOpenClick } = useContext(SelectAssetContext);
  return (
    <tr
      className={selectAssetType}
      onClick={(e) => handleSelectAssetOpenClick(e)}>
      <td>
        <Text color='grey'>{helperText}</Text>
      </td>
      <td>
        <div className='tableRowSelectAsset__cellVerticalAligned'>
          <div className='tableRowSelectAsset__iconAsset'>{assetIcon}</div>
          <Text>{assetName}</Text>
        </div>
      </td>
      <td>
        <div>
          <MdOutlineArrowForwardIos />
        </div>
      </td>
    </tr>
  );
};

export default TableRowSelectAsset;
