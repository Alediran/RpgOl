import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from 'primereact/card';
import { classNames } from 'primereact/utils';
import FloatingLabelInput from '../../../components/floatingLabelInput';
import Localize from '../../../components/localize';
import Systems from '../../../model/static/systems';
import BoardCreateNewGameDto, {
	validationSchema,
} from '../../../model/board/board-create.dto';
import ValuedOptions from '../../../model/static/valuedData';
import MultiCheckboxes from '../../../components/multiCheckboxes';
import Categories from '../../../model/static/categories';

const GameCreate = () => {
	const initialValues: BoardCreateNewGameDto = {
		Title: '',
		GmAlias: '',
		Categories: new Array<ValuedOptions>(),
		System: Systems.Exalted2,
	};

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<BoardCreateNewGameDto>({
		resolver: zodResolver(validationSchema),
		defaultValues: initialValues,
	});

	const onSubmit = (data: BoardCreateNewGameDto) => {};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Card title={Localize.NewGame}>
				<div className='p-fluid'>
					<div className='p-field'>
						<Controller
							name='Title'
							control={control}
							render={({ field, fieldState }) => (
								<FloatingLabelInput
									id={field.name}
									type='input'
									label={Localize.Title}
									value={field.value}
									onChange={field.onChange}
									className={classNames({ 'p-invalid': fieldState.invalid })}
									labelClassName={classNames({ 'p-error': errors[field.name] })}
									errors={errors[field.name]?.message}
								/>
							)}
						/>
					</div>
				</div>
				<div className='p-fluid'>
					<div className='p-field'>
						<Controller
							name='GmAlias'
							control={control}
							render={({ field, fieldState }) => (
								<FloatingLabelInput
									id={field.name}
									type='input'
									label={Localize.Alias}
									value={field.value}
									onChange={field.onChange}
									className={classNames({ 'p-invalid': fieldState.invalid })}
									labelClassName={classNames({ 'p-error': errors[field.name] })}
									errors={errors[field.name]?.message}
								/>
							)}
						/>
					</div>
				</div>
				<div className='p-fluid'>
					<div className='p-field'>
						<label>{Localize.Categories}:</label>
						<Controller
							name='Categories'
							control={control}
							render={({ field, fieldState }) => (
								<MultiCheckboxes mode='horizontal' options={Categories} />
							)}
						/>
					</div>
				</div>
			</Card>
		</form>
	);
};

export default GameCreate;
