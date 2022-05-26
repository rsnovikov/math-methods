import React, {
	ChangeEvent,
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
} from "react";
import CalcInput from "./UI/calcInput";
import {Expression} from "../types/types";

interface ICalcInputSNE {
	SNE: string[];
	setSNE: Dispatch<SetStateAction<Expression>>;
}

const CalcInputSNE: FC<ICalcInputSNE> = ({setSNE, SNE}) => {
	useEffect(() => {
		setSNE(["", ""]);
	}, []);

	return (
		<>
			<div className="mb-3">
							<div>
								<CalcInput
									type="text"
									id="equation"
									placeholder="f(x)"
									label="Уравнение"
									value={SNE[0]}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
										setSNE([event.target.value, SNE[1]])
									}
									}
								/>
								<CalcInput
									type="text"
									id="equation"
									placeholder="f(x)"
									label="Уравнение"
									value={SNE[1]}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
										setSNE([SNE[0], event.target.value])
									}
									}
								/>
							</div>
			</div>
		</>
	);
};

export default CalcInputSNE;
