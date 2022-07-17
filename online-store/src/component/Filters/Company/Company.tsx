import React from 'react';

export const Company = ({ companyName }: { companyName: string }) => {
  const updateName = companyName.charAt(0).toUpperCase() + companyName.slice(1);

  return (
    <div>
      <input
        id={companyName}
        type="checkbox"
        name={companyName.toLowerCase()}
      ></input>
      <label htmlFor={companyName} className="company__name">
        {updateName}
      </label>
    </div>
  );
};
