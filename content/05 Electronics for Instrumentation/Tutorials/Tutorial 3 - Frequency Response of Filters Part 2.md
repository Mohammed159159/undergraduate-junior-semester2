---
tags:
  - resources/videos
---

<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/dwYvUS2lqp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="aspect-ratio:1.76991 / 1"></iframe>

---

> [!Note] [38:23](https://www.youtube.com/watch?v=Rle4uaQQlx0&t=2303#t=38:23.18) 
> - Calculating gain
> ![[Pasted image 20250317153215.png]]
> - Calculating phase
> ![[Pasted image 20250317153254.png]]
> - Calculating output change when changing frequency
> ![[Pasted image 20250317153341.png]]

---

> [!Note] [04:33](https://www.youtube.com/watch?v=dwYvUS2lqp8&t=274#t=04:33.99) [[Frequency Response]]
> ![[Pasted image 20250317151838.png]]
> ![[Pasted image 20250317151919.png]]
> - Magnitude vs. $\omega$
> 	- put all $s$ in $H(s)$ into $\dfrac{s}{\omega}+1$
> 	- magnitude = $20\log{\text{(number mutliplied by s)}}$
> 	- [[Bode Plot]]: Go up/down at each frequency of $s$
> 		- Upper $s$ (zeros) -> up | Lower $s$ (poles) -> down
> 		- Up/down by 20dB/dec
> 		- Up/down at $\omega=$ number below $s$ in $s+1$
> 		- Free $s$ with no $s+1$ means up/down at $\omega=0$
> 	- [[3dB Roll Off Frequency]] => magnitude - 3dB
> 	![[Pasted image 20250317151614.png]]
> - Phase vs. $\omega$
> 	- $\theta=\arctan\left( \frac{\text{img}}{\text{real}} \right)$
> 	- $\angle H(s) = \angle\theta_{\text{numerator}}-\angle\theta_{\text{denominator}}$
> 	- Substitute at each $\omega_{i}$ with $\omega$ >>> $\omega_{i}$ and $\omega$ <<< $\omega_{i}$
> - Deduce type of filter from the response

---

> [!Note] [08:35](https://www.youtube.com/watch?v=dwYvUS2lqp8&t=515#t=08:35.26) Problem 2 - Sheet 2
> ![[Pasted image 20250317150000.png]]
> ![[Pasted image 20250317150014.png]]

---

> [!Note] [26:26](https://www.youtube.com/watch?v=dwYvUS2lqp8&t=1586#t=26:26) Problem 3
> - Derive transfer function
> 	- Resistance of C is $\dfrac{1}{sc}$
> 	- Use nodal analysis
> 	- Use known [[Op-Amp Circuits]]
> ![[Pasted image 20250317150228.png]]
> 
> 
> > [!info] $R_{in}$ does not include reactance, only resistances
> 
> 
> ![[Pasted image 20250317151354.png]]
> ![[Pasted image 20250317151420.png]]

---

> [!Note] [55:53](https://www.youtube.com/watch?v=dwYvUS2lqp8&t=3353#t=55:53.48) [[3dB Roll Off Frequency]]
> ![[Pasted image 20250317151614.png]]

---

