import TableOperation from '../../ui/TableOperations';
import Filter from '../../ui/Filter';

function CabinTableOperations() {
  return (
    <TableOperation>
      <Filter
        filterFeild='discount'
        options={[
          { value: 'all', lable: 'All' },
          { value: 'no-discount', lable: 'No discount' },
          { value: 'with-discount', lable: 'With discount' },
        ]}
      />
    </TableOperation>
  );
}

export default CabinTableOperations;
