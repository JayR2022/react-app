import PropTypes from 'prop-types'

const footer = props => {
    return(
        <div className="footer">
            <footer id='footer'>
                <p>This is a {props.footerProp}</p>
            </footer>
        </div>
    )
}

footer.defaultProps = {
    footerProp:`footer`

}

footer.propTypes = {
    footerProp: PropTypes.string.isRequired
}

export default footer;