import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient()
export default ({children}: any) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
)