import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from 'primereact/card';
import { classNames } from 'primereact/utils';

import { Dropdown } from 'primereact/dropdown';
import FloatingLabelInput from '../../../components/forms/floatingLabelInput';
import Localize from '../../../components/localize';
import Systems from '../../../model/static/systems';
import BoardCreateNewGameDto, {
	validationSchema,
} from '../../../model/board/board-create.dto';
import ValuedOptions from '../../../model/static/valuedOptions';
import Categories from '../../../model/static/categories';
import FloatingMultiSelect from '../../../components/forms/multiSelect';
import { Button } from 'primereact/button';

type Props = {
	onCancel: () => void;
};

const GameCreate = (props: Props) => {
	const { onCancel } = props;

	const initialValues: BoardCreateNewGameDto = {
		Title: '',
		GmAlias: '',
		Categories: new Array<ValuedOptions>(),
		System: Systems[0],
	};

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<BoardCreateNewGameDto>({
		resolver: zodResolver(validationSchema),
		defaultValues: initialValues,
	});

	const onSubmit = (data: BoardCreateNewGameDto) => {};

	const handleCancel = () => {
		//onCancel();
		reset();
	};

	const footer = (
		<span>
			<Button
				label={Localize.CreateNewGame}
				type='submit'
				style={{ marginRight: '.25em' }}
			/>
			<Button
				label={Localize.Cancel}
				onClick={handleCancel}
				className='p-button-secondary'
			/>
		</span>
	);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Card title={Localize.NewGame} footer={footer}>
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
						<Controller
							name='Categories'
							control={control}
							render={({ field, fieldState }) => (
								<div>
									<div className='p-inputgroup'>
										<FloatingMultiSelect
											options={Categories}
											value={field.value}
											onChange={field.onChange}
											placeholder={Localize.Categories}
											display='chip'
											className={classNames({
												'p-invalid': fieldState.invalid,
											})}
										/>
									</div>
								</div>
							)}
						/>
					</div>
				</div>
				<div className='p-fluid'>
					<div className='p-field'>
						<div className='p-inputgroup'>
							<Controller
								name='System'
								control={control}
								render={({ field, fieldState }) => (
									<Dropdown
										options={Systems}
										value={field.value}
										onChange={field.onChange}
										optionLabel='description'
										placeholder={Localize.System}
									/>
								)}
							/>
						</div>
					</div>
				</div>
			</Card>
		</form>
	);
};

export default GameCreate;
