import Table from './Components/Table Data/Table';
import testTableData from './Components/Table Data/tableTestData.json';
import './index.css'
const App = () => (
  <>
    <main className='absolute w-full h-full hidden lg:flex justify-center'>
      <section className='space-y-10'>
        <div className='w-px h-px'></div>
        <Table
          data={testTableData}
          tableConfig={[
            'nameSort',
            'citySort',
            'emailSort',
            'dateSort',
            'roleSort',
          ]}
        />
        //
        <Table
          data={testTableData}
          tableConfig={['nameSort', 'email', 'role']}
        />
        <Table
          data={testTableData}
          tableConfig={['email', 'dateSort', 'roleSort']}
        />
        <Table
          data={testTableData}
          tableConfig={['name', 'citySort', 'date', 'roleSort']}
        />
        <div className='w-px h-px'></div>
      </section>
    </main>
  </>
);

export default App;
