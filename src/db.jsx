import { createSignal } from 'solid-js'
import { Bluefish, Group, StackH, StackV, Circle, Text, Ref, Background, Arrow, Align, Distribute, Rect } from "@bluefish-js/solid";

const Table = ({ children, name }) => {
	return (
		<>
			<Background padding={20}>
				<StackV spacing={50}>
				<Text name="label">{name}</Text>
				{ children }
				{/* <Planets /> Passing inn plannets directly works, but doing it as the children variable does not*/}
				</StackV>
			</Background>
		</>
	)
};

const Planets = () => {
	return (
		<>
			<Circle name="mercury" r={15} fill="#EBE3CF" stroke-width={3} stroke="black" />
			<Circle name="venus" r={36} fill="#DC933C" stroke-width={3} stroke="black" />
			<Circle name="earth" r={38} fill="#179DD7" stroke-width={3} stroke="black" />
			<Circle name="mars" r={21} fill="#F1CF8E" stroke-width={3} stroke="black" />
		</>
	)
};

const App = () => {
	return (
		<>
			<div>
				<Bluefish>
					<Table name="users">
						<Planets /> {/* passing it inn as children does not work... */}
					</Table>
				</Bluefish>
			</div>
		</>
	);
};

export default App;
