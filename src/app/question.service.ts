import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } 	from './question-base';
import { TextboxQuestion }  from './question-textbox';

@Injectable()
export class QuestionService {
	// Todo: get from a remote source of question metadata
	// Todo: make asynchronous
	getQuestions() {
		let questions: QuestionBase<any>[] = [

		new DropdownQuestion({
			key: 'category',
			label: 'Activity Category',
			options: [
			{key: 'active', value: 'active'},
			{key: 'eats', value: 'eats'},
			{key: 'drinks', value: 'drinks'},
			{key: 'custom', value: 'custom'}
			],
			order: 3
		}),
		new TextboxQuestion({
			key: 'name',
			label: 'activity name',
			value: 'Gerbil table tennis',
			required: true,
			order: 1
		}),

		new TextboxQuestion({
			key: 'venue',
			label: 'venue', //ng example is email with type of email
			order: 2
		}),
		new TextboxQuestion({
			key: 'date',
			label: 'date', //ng example is email with type of email
			order: 3
		}),
		new TextboxQuestion({
			key: 'time',
			label: 'time', //ng example is email with type of email
			order: 4
		}),
		new TextboxQuestion({
			key: 'price',
			label: 'price', //ng example is email with type of email
			order: 5
		})
		

		];

		return questions.sort((a, b) => a.order - b.order);
	}
}
