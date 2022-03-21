import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import {
  TabContent,
  Button,
  InputAmountContainer,
  TableInputCashout,
  TabFooter,
  TabContentSelectAsset,
  TransactionForm,
} from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';

const TabContentCashout = () => {
  const { isSelectAssetOpen, selectedFiat } = useContext(SelectAssetContext);

  return (
    <>
      {isSelectAssetOpen ? (
        <TabContentSelectAsset />
      ) : (
        <TabContent>
          <TransactionForm type='cashoutFiat'>
            <InputAmountContainer />
            <TableInputCashout />
            <Button size='xl'>Cashout</Button>
          </TransactionForm>
          <TabFooter
            textLeft={`${selectedFiat?.symbol} balance`}
            textRight={convertToCurrency(selectedFiat?.balance_eur)}
          />
        </TabContent>
      )}
    </>
  );
};

export default TabContentCashout;
