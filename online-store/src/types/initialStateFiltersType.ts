export interface InitialStateFiltersType {
  selectedCompany: Array<string>;
  selectedCpu: Array<string>;
  selectedRam: Array<string>;
  selectedSsd: Array<string>;
  selectedCounts: [number, number];
  selectedPrice: [number, number];
  selectedYearRealease: [number, number];
  selectedColors: Array<string>;
  selectedFavorite: boolean;
  search: string;
}
