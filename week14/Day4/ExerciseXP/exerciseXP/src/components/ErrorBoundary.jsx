import React from 'react';

export class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasError: false,
        }
    }

static getDerivedStateFromError(error){
    return {hasError:true}
}

componentDidCatch(error, errorInfo){
    console.log(error);
}

    render(){
        if (this.state.hasError){
            return(
                <>
                <h1>Something Went Wrong</h1>
                </>
            )
        }
        return this.props.children
    }
}

// export default ErrorBoundary

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       errorInfo: null,
//     };
//   }

//   componentDidCatch(error, errorInfo) {
//     this.setState({ error, errorInfo });
//   }

//   render() {
//     if (this.state.errorInfo) {
//       return (
//         <div>
//           <h2>Something went wrong.</h2>
//           <details style={{ whiteSpace: 'pre-wrap' }}>
//             {this.state.error && this.state.error.toString()}
//             <br />
//             {this.state.errorInfo.componentStack}
//           </details>
//         </div>
//       );
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;