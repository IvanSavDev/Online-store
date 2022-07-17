export type InitialState = {
  selectedCompany: {
    [key: string]: boolean;
  };
  selectedCpu: {
    [key: string]: boolean;
  };
  selectedRam: {
    [key: string]: boolean;
  };
  selectedSsd: {
    [key: string]: boolean;
  };
  selectedCounts: [number, number] | [];
  selectedPrice: [number, number] | [];
  selectedYearRealease: [number, number] | [];
  selectedColors: {
    [key: string]: boolean;
  };
  selectedFavorite: boolean;
};

export type valueCategory = string | number | boolean;
