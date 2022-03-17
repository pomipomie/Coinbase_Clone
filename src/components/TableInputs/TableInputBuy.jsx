import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { Table, TableRowSelectAsset } from '..';

const TableInputBuy = () => {
  const { selectedCoin, selectedFiat } = useContext(SelectAssetContext);
  return (
    <Table isInputTable>
      <tbody>
        <TableRowSelectAsset
          helperText='Buy'
          assetName={selectedCoin?.name}
          assetIcon={selectedCoin?.icon}
          selectAssetType='selectCoin'
        />
        <TableRowSelectAsset
          helperText='With'
          assetName={`${selectedFiat?.symbol} wallet`}
          assetIcon={selectedFiat?.icon}
          selectAssetType='selectFiat'
        />
      </tbody>
    </Table>
  );
};

export default TableInputBuy;
