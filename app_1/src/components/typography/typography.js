import './typography.css'

const Typography = ({ type, children }) => {
	switch (type) {
		case "text": {
			return (
				<p className="typography-text">
					{children}
				</p>
			)
		}
		case "title": {
			return (
				<span className="typography-title">
					{children}
				</span>
			)
		}
	}

}
export default Typography