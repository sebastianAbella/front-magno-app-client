import {
	NativeBaseProvider,
	Box,
	Text,
	Input,
	Button,
	Link,
} from 'native-base';
import { StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
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
			<Box style={styles.content}>
				<Text style={styles.title}>Magno App</Text>
				<Box style={styles.division}>
					<Box style={styles.formLogin}>
						<Text style={styles.bienvenidaTxt}>Bienvenido a Magno App</Text>
						<Input
							variant={'underlined'}
							w='75%'
							left='50px'
							placeholder='Correo'
							style={styles.inputCorreo}
							autoCapitalize='none'
							value={formik.values.email}
							onChangeText={(text) => formik.setFieldValue('email', text)}
						/>
						<Input
							variant={'underlined'}
							w='75%'
							left='50px'
							placeholder='Contraseña'
							secureTextEntry={true}
							style={styles.inputContraseña}
							autoCapitalize='none'
							value={formik.values.password}
							onChangeText={(text) => formik.setFieldValue('password', text)}
						/>
						<Text style={styles.error}>{formik.errors.email}</Text>
						<Text style={styles.error}>{formik.errors.password}</Text>
						<Button
							bg='#5a9c6a'
							left='10%'
							borderRadius='30px'
							width='80%'
							height='70px'
							position='absolute'
							top='63%'
							onPress={formik.handleSubmit}
						>
							<Text style={styles.buttonText}>Entrar</Text>
						</Button>
						<Link
							position='absolute'
							top='80%'
							left='23%'
							_text={{
								color: '#2b6a2b',
								fontSize: '17px',
								fontWeight: 'bold',
							}}
						>
							¿Olvidaste tu contraseña?
						</Link>
						<Link
							position='absolute'
							top='87%'
							left='40%'
							_text={{
								color: '#2b6a2b',
								fontSize: '17px',
								fontWeight: 'bold',
							}}
						>
							Registrate
						</Link>
					</Box>
				</Box>
			</Box>
		</NativeBaseProvider>
	);
}

function initialValues() {
	return {
		email: '',
		password: '',
	};
}

function validationSchema() {
	return {
		email: Yup.string().required('Los datos son obligatorios'),
		password: Yup.string().required('Los datos son obligatorios'),
	};
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: '#5a8c6a',
	},
	title: {
		position: 'absolute',
		marginTop: 150,
		paddingTop: 30,
		marginLeft: 70,
		fontSize: 50,
		fontWeight: 'bold',
		color: '#fff',
	},
	division: {
		width: '100%',
		height: 400,
		backgroundColor: '#fffacd',
		marginTop: 428,
	},
	formLogin: {
		width: '90%',
		height: 520,
		backgroundColor: '#fff',
		borderRadius: 40,
		marginTop: -140,
		marginLeft: 20,
	},
	bienvenidaTxt: {
		position: 'absolute',
		marginTop: 50,
		marginLeft: 47,
		fontSize: 23,
		fontWeight: 'bold',
		color: '#787373',
	},
	inputCorreo: {
		marginTop: 100,
		fontSize: 20,
		height: 50,
		width: 30,
	},
	inputContraseña: {
		marginTop: 20,
		fontSize: 20,
		height: 50,
		width: 30,
	},
	error: {
		textAlign: 'center',
		color: '#f00',
	},
	buttonText: {
		color: '#fff',
		paddingTop: 10,
		fontSize: 25,
		fontWeight: 'bold',
	},
});
