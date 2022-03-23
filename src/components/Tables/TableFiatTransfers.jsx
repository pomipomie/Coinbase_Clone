import './TablePayments.css';
import { Text, Table } from '..';
import useTransactions from '../../hooks/useTransactions';
import { timestampToMonthDayYear } from '../../utilities/transform-dates';

const TableFiatTransfers = () => {
  const { fiatTransactions } = useTransactions();

  return (
    <Table>
      <tbody>
        {fiatTransactions.slice(0, 5).map((t) => (
          <tr key={t?.id}>
            <td>
              <div className='tablePayments__cell'>
                <img className='tablePayments__icon' src={t?.fiat?.icon} />
                <div className='tablePayments__head'>
                  <Text>{`${
                    t?.type === 'depositFiat' ? 'Deposited' : 'Withdrew'
                  } ${t?.fiat?.amount} ${t?.fiat?.symbol}`}</Text>
                </div>
                <div className='tablePayments__body'>
                  <Text color='grey' size='s'>
                    {`On ${timestampToMonthDayYear(t?.timestamp)}`}
                  </Text>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableFiatTransfers;
