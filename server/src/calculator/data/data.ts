import {IParams, ITypeOfTask} from '../calculatorTypes';
import {
	EDEMethods,
	EEquationMethods, ERegressMethods,
	ESLAEMethods,
	ESNEMethods,
	ETypesOfEquation,
} from '../calcEnums';

export const equationParams: IParams = {
	accuracy: {
		id: '1',
		name: 'accuracy',
		label: 'Точность',
	},
	a: {
		id: '2',
		name: 'a',
		label: 'Левая граница a',
	},
	b: {
		id: '3',
		name: 'b',
		label: 'Правая граница b',
	},
};

export const typesOfTasks: ITypeOfTask[] = [
	{
		id: '1',
		title: 'Решение уравнения',
		type: ETypesOfEquation.equation,
		methods: [
			{
				id: '1',
				title: 'Метод половинного деления',
				type: EEquationMethods.halfDiv,
				params: equationParams,
			},
			{
				id: '2',
				title: 'Метод простых итераций',
				type: EEquationMethods.simpleIter,
				params: equationParams,
			},
			{
				id: '3',
				title: 'Метод Ньютона',
				type: EEquationMethods.newton,
				params: equationParams,
			},
		],
	},
	{
		id: '2',
		title: 'Решение системы линейных уравнений',
		type: ETypesOfEquation.SLAE,
		methods: [
			{
				id: '1',
				title: 'Метод простых итераций',
				type: ESLAEMethods.simpleIter,
				params: {
					accuracy: {
						label: 'Точность',
						name: 'accuracy',
						id: '1',
					},
				},
			},
			{
				id: '2',
				title: 'Метод Зейделя',
				type: ESLAEMethods.zeidel,
				params: {
					accuracy: {
						label: 'Точность',
						name: 'accuracy',
						id: '2',
					},
				},
			},
		],
	},
	{
		id: '3',
		title: 'Решение системы нелинейных уравнений',
		type: ETypesOfEquation.SNE,
		methods: [
			{
				id: '1',
				title: 'Метод простых итераций',
				type: ESNEMethods.simpleIter,
				params: {
					accuracy: {
						label: 'Точность',
						name: 'accuracy',
						id: '1',
					},
					x0: {
						label: 'x0',
						name: 'x0',
						id: '2'
					},
					y0: {
						label: 'y0',
						name: 'y0',
						id: '3'
					}
				},
			},
			{
				id: '2',
				title: 'Метод Ньютона',
				type: ESNEMethods.newton,
				params: {
					accuracy: {
						label: 'Точность',
						name: 'accuracy',
						id: '1',
					},
					x0: {
						label: 'x0',
						name: 'x0',
						id: '2'
					},
					y0: {
						label: 'y0',
						name: 'y0',
						id: '3'
					}
				},
			},
		],
	},
	{
		id: '4',
		title: 'Определение параметров регрессии',
		type: ETypesOfEquation.regress,
		methods: [
			{
				id: '1',
				title: 'Линейная и квадратичная',
				type: ERegressMethods.all,
				params: {
					xi: {
						label: 'Xi',
						name: 'xi',
						id: '1',
						type: "text"
					},
					yi: {
						label: 'Yi',
						name: 'yi',
						id: '2',
						type: "text"
					}
				},
			},
		],
	},
	{
		id: '5',
		title: 'Решение дифференциального уравнения',
		type: ETypesOfEquation.DE,
		methods: [
			{
				id: '1',
				title: 'Метод Эйлера-Коши',
				type: EDEMethods.eiler,
				params: {
					x0: {
						label: 'x0',
						name: 'x0',
						id: '1'
					},
					y0: {
						label: 'y0',
						name: 'y0',
						id: '2'
					},
					delta: {
						label: 'разность',
						name: 'delta',
						id: '3'
					},
					point: {
						label: 'точка',
						name: 'point',
						id: '4'
					}
				},
			},
			{
				id: '2',
				title: 'Метод Рунге-Кутта',
				type: EDEMethods.rudgeKutt,
				params: {
					x0: {
						label: 'x0',
						name: 'x0',
						id: '1'
					},
					y0: {
						label: 'y0',
						name: 'y0',
						id: '2'
					},
					delta: {
						label: 'разность',
						name: 'delta',
						id: '3'
					},
					point: {
						label: 'точка',
						name: 'point',
						id: '4'
					}
				},
			},
		],
	},
];
