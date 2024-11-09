import { useQuery } from "@tanstack/react-query";
import { getSomeData, insertSomeData } from "../actions";

export function useSomeData() {
    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ["some-data"],
        queryFn: getSomeData,
        staleTime: 5000,
    });

    const addData = async (inputData: string) => {
        try {
            await insertSomeData(inputData);
            refetch();
        } catch (err) {
            console.error('Failed to add data:', err);
            throw err;
        }
    };

    return {
        data: data?.data,
        error,
        isLoading,
        addData,
    };
}
