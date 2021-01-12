# The Rock Up API documentation and development declaration.

## User Paths
<table>
<tr>
  <th colspan="4">Request</th>
  <th colspan="2">Response</th>
</tr>
<tr>
  <th>Verb</th>
  <th>URI</th>
  <th>body</th>
  <th>Headers</th>
  <th>Status</th>
  <th>body</th>
</tr>
<tr>
<td>POST</td>
<td>`/sign-up`</td>
<td><strong>credentials</strong></td>
<td>empty</td>
<td>201, Created</td>
<td><strong>user</strong></td>
</tr>
<tr>
<td>POST</td>
<td>`/sign-in`</td>
<td><strong>credentials</strong></td>
<td>empty</td>
<td>200 OK</td>
<td><strong>user w/token</strong></td>
</tr>
<tr>
<td>DELETE</td>
<td>`/sign-out`</td>
<td>empty</td>
<td><strong>token</strong></td>
<td>201 Created</td>
<td>empty</td>
</tr>
<tr>
<td>PATCH</td>
<td>`/change-pass`</td>
<td><strong>passwords</strong></td>
<td><strong>token</strong></td>
<td>204 No Content</td>
<td><strong>user w/token</strong></td>
</tr>
</table>
