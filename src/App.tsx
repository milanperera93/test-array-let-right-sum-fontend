import "./App.scss";
import { Header, InfoContainer } from "./components";

const description =
  "The solutions had few approaches and the most optimum approach was to iterate through the array from both sides to get the summation of the sub arrays. Following pseudo code explains the approach and the implementations.";

const steps = [
  "First we check wether the array has more than 2 elements. If it does not returns a error saying insufficient array length.",
  "we loop the array through a loop which initialize a starting pivot, ending pivot, left sum and a right sum.",
  "if the left sum is less than right sum we increment the start pivot and current starting pivot element will be added to left sum.",
  "if the right sum is less than the left sum we decrement the end pivot and current end pivot element will be added to right sum.",
  "if left sum is equal to right sum and we pivots are not equal we keep then loop going",
  "when the start sum and the end sup is equal and the pivots are the same we have a solution!"
];

function App() {
  return (
    <div className="App">
      {/* header */}

      <Header
        subtitle="Full-Stack Developer Selection Process - Technical Test | Kiwibot"
        title="Find an element in array such that sum of left array is equal to sum of
        right array"
      />
      <div className="separator"></div>
      <InfoContainer steps={steps} description={description} />
    </div>
  );
}

export default App;
