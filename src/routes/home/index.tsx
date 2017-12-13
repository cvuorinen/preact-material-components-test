import { h, Component } from 'preact';
import Card, { Primary, Title, Subtitle, SupportingText, Actions, Action } from 'preact-material-components/Card/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import * as style from './style.css';

export default class Home extends Component<{}, {}> {
	render() {
		return (
			<div class={style.home}>
				<h1>Home route</h1>
				<Card>
					<Primary>
						<Title>Home card</Title>
						<Subtitle>Welcome to home route</Subtitle>
					</Primary>
					<SupportingText>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
					</SupportingText>
					<Actions>
						<Action>OKAY</Action>
					</Actions>
				</Card>
			</div>
		);
	}
}
