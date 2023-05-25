"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const react_query_1 = require("@tanstack/react-query");
const App_1 = require("./App");
const react_2 = require("@chakra-ui/react");
const queryClient = new react_query_1.QueryClient();
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <react_query_1.QueryClientProvider client={queryClient}>
      <react_2.ChakraProvider>
        <App_1.App />
      </react_2.ChakraProvider>
    </react_query_1.QueryClientProvider>
  </react_1.default.StrictMode>);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9vdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUm9vdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBeUI7QUFDekIsOERBQXVDO0FBQ3ZDLHVEQUF5RTtBQUN6RSwrQkFBNEI7QUFDNUIsNENBQWtEO0FBRWxELE1BQU0sV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFBO0FBRXJDLGdCQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFnQixDQUFDLENBQUMsTUFBTSxDQUN4RSxDQUFDLGVBQUssQ0FBQyxVQUFVLENBQ2Y7SUFBQSxDQUFDLGlDQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUN2QztNQUFBLENBQUMsc0JBQWMsQ0FDYjtRQUFBLENBQUMsU0FBRyxDQUFDLEFBQUQsRUFDTjtNQUFBLEVBQUUsc0JBQWMsQ0FDbEI7SUFBQSxFQUFFLGlDQUFtQixDQUN2QjtFQUFBLEVBQUUsZUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUNwQixDQUFBIn0=