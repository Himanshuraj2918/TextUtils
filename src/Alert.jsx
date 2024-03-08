import React from 'react'
import { CheckCircle} from 'lucide-react'

function SuccessBanner(props) {
	return (
    props.alert &&	<>
			<div className="rounded-md border-l-4 border-green-500 bg-green-100 p-4 sticky">
				<div className="flex items-center  space-x-4">
					<div>
						<CheckCircle className="h-6 w-6 text-green-600" />
					</div>
					<div>
						<p className="text-xl  font-medium text-green-600">
							{props.alert.msg}
						</p>
					</div>
				
				</div>
			</div>
		</>
	)
}

SuccessBanner.defaultProps = {
	
}


export default SuccessBanner
