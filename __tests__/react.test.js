import renderer from 'react-test-renderer';
import FilterCategory from 'Src/component/Filters/MergeCategories/FilterCategory/FilterCategory';
import { chooseCompany } from 'Src/reducer/reducerActions';
import { productData } from 'Src/data/productData';
import MergeCategories from 'Src/component/Filters/MergeCategories/MergeCategories';

it('renders with or without a name', () => {
  const component = renderer
    .create(
      <FilterCategory
        action={chooseCompany}
        name={'acer'}
        stateName={'selectedCompany'}
      />
    )
    .toJSON();
  expect(component).toMatchSnapshot();
});

it('renders with or without a name2', () => {
  const component = renderer
    .create(<MergeCategories dataItems={productData} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
