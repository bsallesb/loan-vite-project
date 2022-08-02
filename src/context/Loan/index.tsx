import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import Api from 'services/Api';

import { InstallmentsType } from 'types/Installments';
import { OpportunitiesType } from 'types/Opportunities';
import { SimulationType } from 'types/Simulation';
import { ValuesType } from 'types/Values';

interface ILoanProps {
  chosenValue: number;
  error: string | null;
  months: number;
  opportunities: OpportunitiesType | null;
  values: ValuesType | null;
  installments: InstallmentsType | null;
  simulation: SimulationType | null;
  isLoading: boolean;
  setChosenValue: Dispatch<SetStateAction<number>>;
  setMonths: Dispatch<SetStateAction<number>>;
  setError: (value: React.SetStateAction<string | null>) => void;
  getOpportunities: () => Promise<void>;
  getValues: () => Promise<void>;
  getInstallments: () => Promise<void>;
  getSimulation: () => Promise<void>;
}
interface ILoanProviderProps {
  children: React.ReactNode;
}

export const LoanContext = createContext<ILoanProps>({} as ILoanProps);

export const LoanProvider: React.FC<ILoanProviderProps> = ({ children }) => {
  const [opportunities, setOpportunities] = useState<OpportunitiesType | null>(
    null,
  );
  const [values, setValues] = useState<ValuesType | null>(null);
  const [installments, setInstallments] = useState<InstallmentsType | null>(
    null,
  );
  const [simulation, setSimulation] = useState<SimulationType | null>(null);
  const [chosenValue, setChosenValue] = useState(0);
  const [months, setMonths] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getOpportunities = useCallback(async (): Promise<void> => {
    setIsLoading(true);

    try {
      const response = await Api.get(`/test`);
      setOpportunities(response?.data);
    } catch {
      setOpportunities(null);
      setError('Não foi possível conectar-se com a API');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getValues = useCallback(async (): Promise<void> => {
    setIsLoading(true);

    try {
      const response = await Api.get(`/test/values`);
      setValues(response?.data);
    } catch {
      setValues(null);
      setError('Não foi possível conectar-se com a API');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getInstallments = useCallback(async (): Promise<void> => {
    setIsLoading(true);

    try {
      const response = await Api.get(`/test/installments`);
      setInstallments(response?.data);
    } catch {
      setInstallments(null);
      setError('Não foi possível conectar-se com a API');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getSimulation = useCallback(async (): Promise<void> => {
    setIsLoading(true);

    try {
      const response = await Api.get(`/test/simulation`);
      setSimulation(response?.data);
    } catch {
      setSimulation(null);
      setError('Não foi possível conectar-se com a API');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <LoanContext.Provider
      value={useMemo(
        () => ({
          chosenValue,
          months,
          opportunities,
          values,
          installments,
          simulation,
          isLoading,
          error,
          setChosenValue,
          setMonths,
          setError,
          getOpportunities,
          getValues,
          getInstallments,
          getSimulation,
        }),
        [
          chosenValue,
          months,
          opportunities,
          values,
          installments,
          simulation,
          isLoading,
          error,
          setChosenValue,
          setMonths,
          setError,
          getOpportunities,
          getValues,
          getInstallments,
          getSimulation,
        ],
      )}
    >
      {children}
    </LoanContext.Provider>
  );
};

export const useLoan = (): ILoanProps => {
  const context = useContext(LoanContext);

  if (!context) {
    throw new Error('useLoanHook must be within LoanProvider');
  }

  return context;
};
