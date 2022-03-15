import './TableReceive.css';
import { FaAddressCard } from 'react-icons/fa';
import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import {
  Table,
  TableRowQR,
  TableRowSelectAsset,
  TableRowAssetAddress,
} from '..';

const TableReceive = () => {
  const { selectedCrypto } = useContext(SelectAssetContext);
  return (
    <div className='TableReceive'>
      <Table isInputTable>
        <tbody>
          <TableRowQR />
          <TableRowSelectAsset
            helperText='Asset'
            assetName={selectedCrypto.name}
            assetIcon={selectedCrypto.icon}
            selectAssetType='selectCrypto'
          />
          <TableRowAssetAddress
            helperText='Address'
            address='123bu1b2423i45b4ib'
            icon={<FaAddressCard />}
          />
        </tbody>
      </Table>
    </div>
  );
};

export default TableReceive;
