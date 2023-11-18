import { createSignal } from 'solid-js'
import { Bluefish, Group, StackH, StackV, Circle, Text, Ref, Background, Arrow, Align, Distribute, Rect } from "@bluefish-js/solid";

const App = () => {
	const [planet, setPlanet] = createSignal("mercury");

	// Bug: seems like Bluefish doesn't work with signals?
	const handler = () => {
		if(planet() == "mercury") {
			setPlanet("venus");
		} else if (planet() == "venus") {
			setPlanet("earth");
		} else if (planet() == "earth") {
			setPlanet("mars");
		} else {
			setPlanet("mercury");
		}
	};

	return (
		<>
			<button onClick={handler}>Click Me</button>
			<div>Current planet: {planet()}</div>

			<div>
				<Bluefish>
					{/* Bluefish is a diagramming library for SolidJS */}
					{/* You can specify UI-like components such as Row and Background */}
					<Background padding={20}>
						<StackH spacing={50}>
							<Circle name="mercury" r={15} fill="#EBE3CF" stroke-width={3} stroke="black" />
							<Circle name="venus" r={36} fill="#DC933C" stroke-width={3} stroke="black" />
							<Circle name="earth" r={38} fill="#179DD7" stroke-width={3} stroke="black" />
							<Circle name="mars" r={21} fill="#F1CF8E" stroke-width={3} stroke="black" />
						</StackH>
					</Background>
					{/* But you can also use *relations* like Align and Distribute */}
					<Align alignment="centerX">
						<Text name="label">{planet()}</Text>
						{/* Bluefish lets you refer to previous components using a special `Ref` component. */}
						<Ref select={planet()} />
					</Align>
					<Distribute direction="vertical" spacing={60}>
						<Ref select="label" />
						<Ref select={planet()}/>
					</Distribute>
					{/* In addition to performing layout, Bluefish relations can also draw objects. */}
					<Arrow>
						<Ref select="label" />
						<Ref select={planet()} />
					</Arrow>
				</Bluefish>
			</div>
		</>
	);
};

export default App;
