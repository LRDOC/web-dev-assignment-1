import AddingAndRemovingToFromArrays from "./AddingRemovingToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ArrowFunctions from "./ArrowFunction";
import BooleanVariables from "./BooleanVariables";
import Classes from "./classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImplmentedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import Styles from "./style";
import TernaryOperator from "./TernaryOperator";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import Add from "./add";
import Square from "./Square";
import Highlight from "./Highlights";
import AddPathParameters from "./AddPathParams";
import PathParameters from "./PathParameters";

export default function Lab3() {
    console.log('Hello World');
    return (
        <div id="wd-lab3" className="container-fluid">
            <h3>Lab 3 - Javascript</h3>
            <VariablesAndConstants/>
            <VariableTypes/>
            <BooleanVariables/>
            <IfElse/>
            <TernaryOperator/>
            <ConditionalOutputIfElse/>
            <ConditionalOutputInline/>
            <LegacyFunctions/>
            <ArrowFunctions/>
            <ImpliedReturn/>
            <SimpleArrays/>
            <AddPathParameters/>
            <ArrayIndexAndLength/>
            <AddingAndRemovingToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunction/>
            <JsonStringify/>
            <House/>
            <TodoItem/>
            <TodoList/>
            <Spreading/>
            <Destructing/>
            <FunctionDestructing/>
            <DestructingImports/>
            <Classes/>
            <Styles/>
            <Add a={3} b={4}/>
            <h4>Square of 4</h4>
            <Square>4</Square>
            <hr/>
            <h4>Highlights</h4>
            <Highlight>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime placeat veritatis inventore. Commodi magni nisi accusamus itaque fugiat harum
                totam inventore eligendi officia quaerat sapiente, deleniti, aut laborum temporibus! Quas!
            </Highlight>
            <hr/>
            <PathParameters/>
        </div>
    );
}