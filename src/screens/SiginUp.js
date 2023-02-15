import {
	NativeBaseProvider,
	Box,
	Text,
	Input,
	Select,
	Button,
	VStack,
	HStack,
} from 'native-base';
import { StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function SiginUp() {
	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object(validationSchema()),
		validateOnChange: false,
		onSubmit: (formValue) => {
			console.log('Formulario enviado...');
			console.log(formValue);
		},
	});

	return (
		<NativeBaseProvider>
			<Box
				flex={1}
				bg='#EAF9D1'
				alignItems='center'
				justifyContent='space-between'
			>
				<Text
					position='absolute'
					top='5%'
					left='20%'
					fontSize='40px'
					color='#55886C'
					bold
					italic
				>
					APP MAGNO
				</Text>
				<Box
					flex={1}
					bg='#fff'
					justifyContent='space-between'
					width='90%'
					maxHeight={690}
					top='15%'
					borderRadius={40}
				>
					<VStack>
						<Text
							position='absolute'
							top={5}
							left={35}
							fontSize={25}
							color='#787373'
						>
							Queremos conocerte
						</Text>
						<Text
							position='absolute'
							top={60}
							left={35}
							fontSize={17}
							color='#000'
						>
							Brindanos la siguiente información:
						</Text>
						<HStack space={2} top={120} left={35} w='100%' height='45'>
							<Input
								variant={'underlined'}
								w='83%'
								fontSize={20}
								placeholder='Nombre completo'
								value={formik.values.name}
								onChangeText={(text) => formik.setFieldValue('name', text)}
							/>
							<Text left={-135} style={styles.error}>
								{formik.errors.name}
							</Text>
						</HStack>
						<HStack space={4} top={150} left={35} w='100%' height='25'>
							<Select
								placeholder='Tipo doc'
								width={108}
								accessibilityLabel='Tipo doc'
								value={formik.values.typeDoc}
								onValueChange={(text) => formik.setFieldValue('typeDoc', text)}
							>
								<Select.Item label='RC' value='rc' />
								<Select.Item label='TI' value='ti' />
								<Select.Item label='CC' value='cc' />
								<Select.Item label='CE' value='ce' />
							</Select>
							<Text style={styles.error}>{formik.errors.typeDoc}</Text>
							<Input
								variant={'underlined'}
								w={140}
								h='45'
								fontSize={15}
								placeholder='Num documento'
								value={formik.values.numberDoc}
								onChangeText={(text) => formik.setFieldValue('numberDoc', text)}
							/>
							<Text left={-35} style={styles.error}>
								{formik.errors.numberDoc}
							</Text>
						</HStack>
						<HStack space={2} top={190} left={35} w='100%' height='45'>
							<Input
								variant={'underlined'}
								w='83%'
								fontSize={20}
								placeholder='Celular'
								value={formik.values.phoneNumber}
								onChangeText={(text) =>
									formik.setFieldValue('phoneNumber', text)
								}
							/>
							<Text left={-235} style={styles.error}>
								{formik.errors.phoneNumber}
							</Text>
						</HStack>
						<HStack space={2} top={210} left={35} w='100%' height='45'>
							<Input
								variant={'underlined'}
								w='83%'
								fontSize={20}
								placeholder='Correo electrónico'
								autoCapitalize='none'
								value={formik.values.email}
								onChangeText={(text) => formik.setFieldValue('email', text)}
							/>
							<Text left={-130} style={styles.error}>
								{formik.errors.email}
							</Text>
						</HStack>
						<HStack space={2} top={230} left={35} w='100%' height='45'>
							<Input
								variant={'underlined'}
								w='83%'
								fontSize={20}
								placeholder='Fecha de nacimiento'
								value={formik.values.birthdate}
								onChangeText={(text) => formik.setFieldValue('birthdate', text)}
							/>
							<Text left={-115} style={styles.error}>
								{formik.errors.birthdate}
							</Text>
						</HStack>
						<HStack space={2} top={250} left={35} w='100%' height='45'>
							<Input
								variant={'underlined'}
								w='83%'
								fontSize={20}
								placeholder='Estatura'
								value={formik.values.stature}
								onChangeText={(text) => formik.setFieldValue('stature', text)}
							/>
							<Text left={-225} style={styles.error}>
								{formik.errors.stature}
							</Text>
						</HStack>
						<HStack space={2} top={270} left={35} w='100%' height='45'>
							<Input
								variant={'underlined'}
								w='83%'
								fontSize={20}
								placeholder='Peso'
								value={formik.values.peso}
								onChangeText={(text) => formik.setFieldValue('peso', text)}
							/>
							<Text left={-255} style={styles.error}>
								{formik.errors.peso}
							</Text>
						</HStack>
						<Button
							w='80%'
							height='50px'
							top={330}
							left={10}
							borderRadius={25}
							bg='#5a9c6a'
							onPress={formik.handleSubmit}
						>
							<Text fontSize='20px' color='#fff' fontWeight='bold'>
								Continuar
							</Text>
						</Button>
					</VStack>
				</Box>
			</Box>
		</NativeBaseProvider>
	);
}

function initialValues() {
	return {
		name: '',
		typeDoc: '',
		numberDoc: '',
		phoneNumber: '',
		email: '',
		birthdate: '',
		stature: '',
		peso: '',
	};
}

function validationSchema() {
	return {
		name: Yup.string().required('*'),
		typeDoc: Yup.string().required('*'),
		numberDoc: Yup.string().required('*'),
		phoneNumber: Yup.string().required('*'),
		email: Yup.string().email('No es un email valido').required('*'),
		birthdate: Yup.string().required('*'),
		stature: Yup.string().required('*'),
		peso: Yup.string().required('*'),
	};
}

const styles = StyleSheet.create({
	error: {
		textAlign: 'center',
		color: '#f00',
	},
});
