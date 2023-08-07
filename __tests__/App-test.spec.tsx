/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import axios from 'axios';
import { GetProductListService } from '../app/global/network/HomeService';


  it('Api response time testing', async () => {
    // Start the timer
    const startTime = Date.now();

    // Make the API call
    await axios({
      method: 'get',
      url: GetProductListService().getUrl()
    })
    // Calculate the response time
    const responseTime = Date.now() - startTime;
  
    // Set the acceptable limit for response time (adjust as needed)
    const acceptableResponseTime = 1000; // 1000 milliseconds (1 second)
  
    // Assert that the response time is within acceptable limits
    expect(responseTime).toBeLessThan(acceptableResponseTime);

  });

