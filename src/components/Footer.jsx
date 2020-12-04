import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
		<footer>
			<p className="copyright">
            	Copyright &copy;<script>document.write(new Date().getFullYear());</script> | Design & Developed by <a href="https://www.waleedrehman.co.uk">Muhammad Waleed ur Rehman</a>
        	</p>
		</footer>
    )
  }
}
