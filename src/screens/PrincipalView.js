import { NativeBaseProvider, Box, Text, Button, Link } from 'native-base';

export default function PrincipalView(props) {
	const { navigation } = props;

	const goToPage = (pageName) => {
		navigation.navigate(pageName);
	};

	return (
		<NativeBaseProvider>
			<Box
				flex={1}
				bg='#5a8c6a'
				alignItems='center'
				justifyContent='space-between'
			>
				<Text
					position='absolute'
					top='20%'
					left='20%'
					fontSize='50px'
					color='white'
					bold
					italic
				>
					APP
				</Text>
				<Text
					position='absolute'
					top='30%'
					left='20%'
					fontSize='50px'
					color='white'
					bold
					italic
				>
					MAGNO
				</Text>
				<Button
					onPress={() => goToPage('Login')}
					bg='#5a9c6a'
					borderRadius='30px'
					width='80%'
					height='70px'
					position='absolute'
					top='75%'
				>
					<Text color='white' fontSize='25px' fontWeight='bold'>
						Log in
					</Text>
				</Button>
				<Text
					position='absolute'
					top='85%'
					left='20%'
					color='white'
					fontSize='17px'
				>
					¿No tienes cuenta?
				</Text>
				<Link
					onPress={() => goToPage('SiginUp')}
					position='absolute'
					top='85%'
					left='60%'
					_text={{
						color: '#2b6a2b',
						fontSize: '17px',
						fontWeight: 'bold',
					}}
				>
					Inscríbete
				</Link>
			</Box>
		</NativeBaseProvider>
	);
}
