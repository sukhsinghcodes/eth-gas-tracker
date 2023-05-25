"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFeeCard = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
function BaseFeeCard({ fee }) {
    return (<react_1.Card mb={4} variant="outline" size="sm" display="inline-block" bgGradient="linear(to-r, #6687e9 29.14%, #b082d5 53.97%, #ed7ec4 77.85%)" color="white">
      <react_1.CardBody pt={1} pb={1}>
        Base fee: <strong>{fee}</strong>
      </react_1.CardBody>
    </react_1.Card>);
}
exports.BaseFeeCard = BaseFeeCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUZlZUNhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQmFzZUZlZUNhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRDQUFrRDtBQUNsRCxrREFBMEI7QUFNMUIsU0FBZ0IsV0FBVyxDQUFDLEVBQUUsR0FBRyxFQUFvQjtJQUNuRCxPQUFPLENBQ0wsQ0FBQyxZQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLDhEQUE4RCxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQ3JKO01BQUEsQ0FBQyxnQkFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNyQjtrQkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FDakM7TUFBQSxFQUFFLGdCQUFRLENBQ1o7SUFBQSxFQUFFLFlBQUksQ0FBQyxDQUNSLENBQUE7QUFDSCxDQUFDO0FBUkQsa0NBUUMifQ==