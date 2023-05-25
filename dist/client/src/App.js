"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const components_1 = require("./components");
function App() {
    return <react_1.Container maxW='6xl' pt={8} pb={8}>
    <react_1.Heading as='h1' mb={8} bgClip='text' bgGradient='linear(to-r, #6687e9 10%, #b082d5 30%, #ed7ec4 50%)' size={['2xl', '3xl']}>ETH Gas Tracker</react_1.Heading>
    <components_1.BaseFeeCard fee="47"/>
    <react_1.Stack direction={['column', 'column', 'row']} spacing={8} flex={1} justifyContent='center'>
      <components_1.GasPriceCard label="⚡ Instant" price="50" priorityFee="2" usdPrice="1.87" color="#6687e9" badgeColor="green"/>
      <components_1.GasPriceCard label="🏃 Fast" price="48" priorityFee="1" usdPrice="1.09" color="#b082d5" badgeColor="orange"/>
      <components_1.GasPriceCard label="🐢 Standard" price="47" priorityFee="0" usdPrice="0.77" color="#ed7ec4" badgeColor="red"/>
    </react_1.Stack>
  </react_1.Container>;
}
exports.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY2xpZW50L3NyYy9BcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRDQUE2RDtBQUM3RCxrREFBMEI7QUFDMUIsNkNBQXlEO0FBRXpELFNBQWdCLEdBQUc7SUFDakIsT0FBTyxDQUFDLGlCQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDeEM7SUFBQSxDQUFDLGVBQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLHFEQUFxRCxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLGVBQU8sQ0FDcko7SUFBQSxDQUFDLHdCQUFXLENBQUMsR0FBRyxDQUFDLElBQUksRUFDckI7SUFBQSxDQUFDLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUN6RjtNQUFBLENBQUMseUJBQVksQ0FDWCxLQUFLLENBQUMsV0FBVyxDQUNqQixLQUFLLENBQUMsSUFBSSxDQUNWLFdBQVcsQ0FBQyxHQUFHLENBQ2YsUUFBUSxDQUFDLE1BQU0sQ0FDZixLQUFLLENBQUMsU0FBUyxDQUNmLFVBQVUsQ0FBQyxPQUFPLEVBRXBCO01BQUEsQ0FBQyx5QkFBWSxDQUNYLEtBQUssQ0FBQyxTQUFTLENBQ2YsS0FBSyxDQUFDLElBQUksQ0FDVixXQUFXLENBQUMsR0FBRyxDQUNmLFFBQVEsQ0FBQyxNQUFNLENBQ2YsS0FBSyxDQUFDLFNBQVMsQ0FDZixVQUFVLENBQUMsUUFBUSxFQUVyQjtNQUFBLENBQUMseUJBQVksQ0FDWCxLQUFLLENBQUMsYUFBYSxDQUNuQixLQUFLLENBQUMsSUFBSSxDQUNWLFdBQVcsQ0FBQyxHQUFHLENBQ2YsUUFBUSxDQUFDLE1BQU0sQ0FDZixLQUFLLENBQUMsU0FBUyxDQUNmLFVBQVUsQ0FBQyxLQUFLLEVBRXBCO0lBQUEsRUFBRSxhQUFLLENBQ1Q7RUFBQSxFQUFFLGlCQUFTLENBQUMsQ0FBQztBQUNmLENBQUM7QUEvQkQsa0JBK0JDIn0=