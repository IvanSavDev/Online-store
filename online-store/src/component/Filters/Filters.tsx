import React from 'react';
import { LaptopData } from '../../data/typeData';
import { Company } from './Company/Company';

type FilterProps = {
  dataItems: Array<LaptopData>;
};

const Filters: React.FC<FilterProps> = ({ dataItems }) => {
  const companiesName = dataItems.map((item) => item.manufacturer);
  const uniqCompaniesName = Array.from(new Set(companiesName));

  return (
    <div className="filters">
      <input type="text" placeholder="search..." />
      <div>
        <p>Company:</p>
        {uniqCompaniesName.map((companyName) => {
          return <Company key={companyName} companyName={companyName} />;
        })}
      </div>
    </div>
  );
};

export default Filters;
