import { useState } from 'react';
import { Modal, Table } from 'antd';
import Button from '../admin/components/Buttons/Button';
import InputField from '../admin/components/Inputs/Input';
import bkash from '../assets/bkash-logo-png.png'
import nagad from '../assets/nagad.png'
import rocket from '../assets/DBBL-Rocket-Vector-Logo.jpg'
import { FaBitcoin, FaEthereum } from 'react-icons/fa6';
import { BsCoin } from 'react-icons/bs';
import { SiLitecoin } from 'react-icons/si';
import { useForm } from 'react-hook-form';
import withdrawColumns from '../columns/Withdraw';

const Withdraw = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const { control } = useForm()
  const localMethods = [
    { name: 'Bkash', type: 'Payment', minAmount: 5, icon: bkash },
    { name: 'Nagad', type: 'Payment', minAmount: 5, icon: nagad },
    { name: 'Rocket', type: 'Payment', minAmount: 5, icon: rocket },
  ];
  const cryptocurrencies = [
    {
      name: 'BTC', type: 'Crypto', minAmount: 5, icon: <FaBitcoin size={50} />
    },
    {
      name: 'USDT', type: 'Crypto', minAmount: 5, icon: <BsCoin size={50} />
    },
    {
      name: 'Litecoin', type: 'Crypto', minAmount: 5, icon: <SiLitecoin size={50} />
    },
    {
      name: 'Ethereum', type: 'Crypto', minAmount: 5, icon: <FaEthereum size={50} />
    },
  ]
  const userBalance = 100; // Example balance

  const handleOpenModal = (method) => {
    setSelectedMethod(method);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMethod(null);
    setPaymentDetails('');
    setWithdrawAmount('');
  };

  const handleWithdraw = () => {
    if (!withdrawAmount || !paymentDetails) {
      alert('Please fill in all fields');
      return;
    }

    if (withdrawAmount < selectedMethod.minAmount) {
      alert(`Minimum withdrawal amount for ${selectedMethod.name} is $${selectedMethod.minAmount}`);
      return;
    }

    if (withdrawAmount > userBalance) {
      alert('Insufficient balance');
      return;
    }

    alert(`Withdrawal request submitted for ${withdrawAmount} using ${selectedMethod.name}`);
    handleCloseModal();
  };


  const withdrawData = [
    {
      key: 1,
      created_at: '2024-12-01',
      amount: '$100.00',
      method: 'PayPal',
      address: 'example@gmail.com',
      status: 'pending',
    },
    {
      key: 2,
      created_at: '2024-12-02',
      amount: '$250.00',
      method: 'Bank Transfer',
      address: 'Bank of America, Account #123456789',
      status: 'successful',
    },
    {
      key: 3,
      created_at: '2024-12-03',
      amount: '$75.00',
      method: 'Crypto',
      address: '0xabc12345def67890',
      status: 'canceled',
    },
    {
      key: 4,
      created_at: '2024-12-04',
      amount: '$500.00',
      method: 'PayPal',
      address: 'user2@gmail.com',
      status: 'pending',
    },
    {
      key: 5,
      created_at: '2024-12-05',
      amount: '$300.00',
      method: 'Bank Transfer',
      address: 'Wells Fargo, Account #987654321',
      status: 'successful',
    },
  ];




  return (
    <div className="w-full max-w-7xl mx-auto space-y-10 py-20">
      <div className=' pb-5 text-gray-400'>
        <h1 className="text-2xl pb-2 text-gray-300">Withdraw</h1>
        <p>Withdraw your StarCash earnings using the methods listed below.</p>
        <p> <span className='font-semibold'>Note:</span> Withdrawals are processed within 24 hours.</p>
        <p> <span className='font-semibold'>Minimum amount required:</span> $5.</p>
      </div>

      <div >
        <h1 className='text-3xl text-gray-300 font-semibold'>Local Payment Methods</h1>
        <div className="grid grid-cols-6 gap-4 mt-4">
          {localMethods.map((method) => (
            <div onClick={() => handleOpenModal(method)} key={method.name} className='bg-gray-100 cursor-pointer w-fit px-2 last:bg-transparent rounded flex flex-col items-center justify-center'>
              <div className='w-[10rem] h-full mx-auto flex flex-col items-center justify-center'>
                <img className={`rounded ${method.name == 'Rocket' && 'w-full h-full'}`} src={method.icon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div >
        <h1 className='text-3xl text-gray-300 font-semibold'>Crypto Currency</h1>
        <div className="grid grid-cols-7 gap-4 mt-4">
          {cryptocurrencies.map((method) => (
            <Button
              className='flex justify-center items-center flex-col gap-3 py-5'
              key={method.name}
              variant="secondary"
              onClick={() => handleOpenModal(method)}
            >{method.icon}
              <p className='text-gray-300'>{method.name}</p>
            </Button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        title={`Withdraw via ${selectedMethod?.name}`}
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={[
          <Button key="cancel" onClick={handleCloseModal}>
            Cancel
          </Button>,
          <Button key="withdraw" type="primary" onClick={handleWithdraw}>
            Withdraw
          </Button>,
        ]}
      >
        <p>
          <strong>Minimum Amount:</strong> ${selectedMethod?.minAmount}
        </p>
        <p>
          <strong>Your Balance:</strong> ${userBalance}
        </p>
        <InputField
          control={control}
          type="number"
          name='method'
          placeholder="Enter withdrawal amount"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
          className="mb-4"
        />
        <InputField
          control={control}
          type="text"
          name='payment_details'
          placeholder={`Enter ${selectedMethod?.type} details`}
          value={paymentDetails}
          onChange={(e) => setPaymentDetails(e.target.value)}
        />
      </Modal>
      <div>
        <h1 className="text-2xl  pb-2 mb-5 text-gray-300">History</h1>
        <div>
          <Table
            scroll={{ x: true }}
            columns={withdrawColumns}
            dataSource={withdrawData}
            rowHoverable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
