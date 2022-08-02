<script lang="ts">
export let url: string;
export let description: string;
export let name: string;
export let role: string;
</script>



<div class="card">
    <div class="employee-picture" style="background-image: url({url});">
    <h3 class="name">{name}</h3>
    </div>
    <p class="role">{role}</p>
    <p class="description">{description}</p>
</div>  
<style>
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 45rem;
    }
    .employee-picture {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 19.5rem;
        height: 19.5rem;
        border-radius: 50% 50%; 
        background-size: cover;
        background-position: center;
    }

    .name{
        background-color: var(--text-secondary);
        color: var(--text-primary);
        text-align: center;
        width: 55%;
        margin: 0;
        transform: translateY(40%);
        padding: 1rem;
        border-radius: var(--border-radius);
    }

    .role {
        letter-spacing: 5px;
        color: var(--text-primary);
        margin: 10% auto 0;
    }

    .description {
        text-align: center;
        color: var(--text-secondary);
        width: 80%;
        line-height: 2;
    }
	@media only screen and (min-width: 1200px){

        .role {
            margin: 15% 0 0;
        }

        .description {
            width: 90%;
        }
	}
</style>