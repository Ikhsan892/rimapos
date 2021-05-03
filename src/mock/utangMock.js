import uuid from 'uuid/v1';
import mock from 'utils/mock';

mock.onGet('/api/piutang').reply(200, {
  utang: [
    {
      id: uuid(),
      pelanggan: 'Anto',
      total: 20000
    },
    {
      id: uuid(),
      pelanggan: 'Budi',
      total: 10000
    },
    {
      id: uuid(),
      pelanggan: 'Yuni',
      total: 40000
    }
  ]
});
