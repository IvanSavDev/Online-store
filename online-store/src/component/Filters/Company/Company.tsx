import React from 'react';

export const Company = ({ companyName }: { companyName: string }) => {
  const updateName = companyName.charAt(0).toUpperCase() + companyName.slice(1);

  return (
    <div>
      <label>
        <input type="checkbox" name={companyName.toLowerCase()}></input>
        <span className="name-company">{updateName}</span>
      </label>
    </div>
  );
};
