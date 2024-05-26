import Container from '@/components/Container';
import styles from '@/styles/Pricing.module.css';
/**
 * A semantic HTML5 table of super fair pricing.
 * @returns {ReactElement} Returns the incredibly fair pricing.
 */
export default function Pricing() {
  return (
    <Container tag="article" className={styles.pricing}>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Suggested Price (per hour)*</th>
            <th>Minimum Tip (per hour)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Friends & Family</td>
            <td>
              10 dollars (<em>minimum</em>){' '}
            </td>
            <td>
              45% (<em>minimum</em>)
            </td>
          </tr>
          <tr>
            <td>Others</td>
            <td>
              10 dollars (<em>minimum</em>)
            </td>
            <td>50% </td>
          </tr>
          <tr>
            <td>"Not Innocent"</td>
            <td>
              15 dollars (<em>minimum</em>)
            </td>
            <td>60% </td>
          </tr>
          <tr>
            <td>Misjustice</td>
            <td>Free**</td>
            <td>15 dollars</td>
          </tr>
        </tbody>
      </table>
      <em>* All packages come as a 45 hour minimum</em>
      <br />
      <em>
        ** For first half hour, and then 5 dollars (<em>minimum</em>) per 30
        minutes
      </em>
      <br />
      <b>
        <em>All packages non refundable regardless of outcome</em>
      </b>
    </Container>
  );
}
